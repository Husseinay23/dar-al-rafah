import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, User, Tag } from "lucide-react";
import { apiService } from "../services/api";
import { News as NewsType, Topic } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const News = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<NewsType[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [newsRes, topicsRes] = await Promise.all([
          apiService.getNews({
            limit: 12,
            sort: "-publishedAt",
            category: selectedCategory || undefined,
          }),
          apiService.getTopics(),
        ]);

        setNews(newsRes.docs);
        setTopics(topicsRes.docs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            {t("common.retry")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("news.title")}
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === ""
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {t("common.viewAll")}
            </button>
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedCategory(topic.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === topic.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {topic.name}
              </button>
            ))}
          </div>
        </div>

        {/* News List */}
        {news.length > 0 ? (
          <div className="space-y-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  {item.cover && (
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square bg-gray-200 dark:bg-gray-700">
                        <img
                          src={item.cover.url}
                          alt={item.cover.alt || item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className={`p-6 ${item.cover ? "md:w-2/3" : "w-full"}`}>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 ml-1 rtl:mr-1" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1 rtl:mr-1" />
                        <span>
                          {new Date(
                            item.publishedAt || item.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      {item.category && (
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 ml-1 rtl:mr-1" />
                          <span>{item.category.name}</span>
                        </div>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h2>

                    {item.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    <Link
                      to={`/news/${item.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {t("common.readMore")}
                      <svg
                        className="w-4 h-4 ml-1 rtl:mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t("news.noNews")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t("news.noNewsDescription")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
