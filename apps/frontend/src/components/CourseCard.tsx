import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Clock, Users, BookOpen } from 'lucide-react'
import { Course } from '../types'

interface CourseCardProps {
  course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { t } = useTranslation()

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {course.cover && (
        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
          <img
            src={course.cover.url}
            alt={course.cover.alt || course.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
            {t(`courses.level.${course.level}`)}
          </span>
          {course.duration && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 ml-1 rtl:mr-1" />
              {Math.floor(course.duration / 60)}h {course.duration % 60}m
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {course.title}
        </h3>

        {course.summary && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {course.summary}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          {course.lessons && course.lessons.length > 0 && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="w-4 h-4 ml-1 rtl:mr-1" />
              {course.lessons.length} {t('courses.lessons')}
            </div>
          )}
        </div>

        {course.topics && course.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.topics.slice(0, 3).map((topic) => (
              <span
                key={topic.id}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {topic.name}
              </span>
            ))}
            {course.topics.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                +{course.topics.length - 3}
              </span>
            )}
          </div>
        )}

        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors"
        >
          {t('courses.viewCourse')}
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
