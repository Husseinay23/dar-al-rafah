import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Filter, Search } from "lucide-react";
import { apiService } from "../services/api";
import { Course, Topic } from "../types";
import CourseCard from "../components/CourseCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Courses = () => {
  const { t } = useTranslation();
  const [courses, setCourses] = useState<Course[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    level: "",
    topics: [] as string[],
    search: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [coursesRes, topicsRes] = await Promise.all([
          apiService.getCourses({
            limit: 12,
            sort: "-publishedAt",
            level: filters.level || undefined,
            topics: filters.topics.length > 0 ? filters.topics : undefined,
          }),
          apiService.getTopics(),
        ]);

        setCourses(coursesRes.docs);
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
      level: "",
      topics: [],
      search: "",
    });
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.search) {
      return (
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.summary?.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    return true;
  });

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
            {t("courses.title")}
          </h1>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("common.search")}
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 rtl:pr-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white"
            >
              <Filter className="w-4 h-4 ml-2 rtl:mr-2" />
              {t("common.filter")}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("courses.level.beginner")}
                  </label>
                  <select
                    value={filters.level}
                    onChange={(e) =>
                      handleFilterChange("level", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t("common.filter")}</option>
                    <option value="beginner">
                      {t("courses.level.beginner")}
                    </option>
                    <option value="intermediate">
                      {t("courses.level.intermediate")}
                    </option>
                    <option value="advanced">
                      {t("courses.level.advanced")}
                    </option>
                  </select>
                </div>

                {/* Topics Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("courses.topics")}
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
          )}
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredCourses.length} {t("courses.title").toLowerCase()}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t("courses.noCourses")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t("courses.noCoursesDescription")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
