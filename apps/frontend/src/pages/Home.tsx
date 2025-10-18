import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, BookOpen, Newspaper, FileText } from "lucide-react";
import { apiService } from "../services/api";
import { Course, News as NewsType, Paper } from "../types";
import CourseCard from "../components/CourseCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { t } = useTranslation();
  const [courses, setCourses] = useState<Course[]>([]);
  const [news, setNews] = useState<NewsType[]>([]);
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [coursesRes, newsRes, papersRes] = await Promise.all([
          apiService.getCourses({ limit: 3, sort: "-publishedAt" }),
          apiService.getNews({ limit: 3, sort: "-publishedAt" }),
          apiService.getPapers({ limit: 3, sort: "-publishedAt" }),
        ]);

        setCourses(coursesRes.docs);
        setNews(newsRes.docs);
        setPapers(papersRes.docs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        {/* Blue Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-primary-600/30 to-blue-700/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              {t("home.hero.subtitle")}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t("nav.courses")}
                <ArrowRight className="w-5 h-5 ml-2 rtl:mr-2" />
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                {t("nav.research")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-contrast">
              {t("home.latestCourses")}
            </h2>
            <Link
              to="/courses"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1" />
            </Link>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {t("courses.noCourses")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-contrast">
              {t("home.latestNews")}
            </h2>
            <Link
              to="/news"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-contrast-strong"
            >
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1" />
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  {item.cover && (
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                      <img
                        src={item.cover.url}
                        alt={item.cover.alt || item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.author}</span>
                      <span>
                        {new Date(
                          item.publishedAt || item.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      to={`/news/${item.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4"
                    >
                      {t("common.readMore")}
                      <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Newspaper className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {t("news.noNews")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-contrast">
              {t("home.latestResearch")}
            </h2>
            <Link
              to="/research"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1" />
            </Link>
          </div>

          {papers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  {paper.abstract && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {paper.abstract}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{paper.authors.map((a) => a.name).join(", ")}</span>
                    <span>{paper.year}</span>
                  </div>
                  <Link
                    to={`/research/${paper.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {t("research.viewPaper")}
                    <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {t("research.noResearch")}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
