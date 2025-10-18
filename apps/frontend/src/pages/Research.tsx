import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Users, Download, FileText } from "lucide-react";
import { apiService } from "../services/api";
import { Paper, Topic } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const Research = () => {
  const { t } = useTranslation();
  const [papers, setPapers] = useState<Paper[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    year: "",
    topics: [] as string[],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [papersRes, topicsRes] = await Promise.all([
          apiService.getPapers({
            limit: 12,
            sort: "-publishedAt",
            year: filters.year ? parseInt(filters.year) : undefined,
            topics: filters.topics.length > 0 ? filters.topics : undefined,
          }),
          apiService.getTopics(),
        ]);

        setPapers(papersRes.docs);
        setTopics(topicsRes.docs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      year: "",
      topics: [],
    });
  };

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
            {t("research.title")}
          </h1>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("research.year")}
                </label>
                <select
                  value={filters.year}
                  onChange={(e) => handleFilterChange("year", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">{t("common.filter")}</option>
                  {Array.from(
                    { length: 10 },
                    (_, i) => new Date().getFullYear() - i
                  ).map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Topics Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("research.topics")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <label key={topic.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.topics.includes(topic.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange("topics", [
                              ...filters.topics,
                              topic.id,
                            ]);
                          } else {
                            handleFilterChange(
                              "topics",
                              filters.topics.filter((id) => id !== topic.id)
                            );
                          }
                        }}
                        className="mr-2 rtl:ml-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {topic.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                {t("common.clear")}
              </button>
            </div>
          </div>
        </div>

        {/* Papers List */}
        {papers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {paper.year}
                  </span>
                  {paper.pdf && (
                    <a
                      href={paper.pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm"
                    >
                      <Download className="w-4 h-4 ml-1 rtl:mr-1" />
                      {t("research.download")}
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {paper.title}
                </h3>

                {paper.abstract && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.abstract}
                  </p>
                )}

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Users className="w-4 h-4 ml-1 rtl:mr-1" />
                  <span>{paper.authors.map((a) => a.name).join(", ")}</span>
                </div>

                {paper.topics && paper.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic.id}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {topic.name}
                      </span>
                    ))}
                    {paper.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{paper.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <Link
                  to={`/research/${paper.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  {t("research.viewPaper")}
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
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t("research.noResearch")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t("research.noResearchDescription")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;
