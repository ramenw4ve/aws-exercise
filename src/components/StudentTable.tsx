import React from 'react';
import { GraduationCap, Mail, Calendar, User, BookOpen, Trophy } from 'lucide-react';
import { Student } from '../types/student';
import { useTheme } from '../contexts/ThemeContext';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const { isDark } = useTheme();

  const getGpaColor = (gpa: number) => {
    if (isDark) {
      if (gpa >= 3.7) return 'text-emerald-400 bg-emerald-900/30 border-emerald-500/20';
      if (gpa >= 3.0) return 'text-amber-400 bg-amber-900/30 border-amber-500/20';
      return 'text-red-400 bg-red-900/30 border-red-500/20';
    } else {
      if (gpa >= 3.7) return 'text-green-600 bg-green-50 border-green-200';
      if (gpa >= 3.0) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const getStatusColor = (status: string) => {
    if (isDark) {
      return status === 'Active' 
        ? 'text-emerald-400 bg-emerald-900/30 border-emerald-500/20' 
        : 'text-red-400 bg-red-900/30 border-red-500/20';
    } else {
      return status === 'Active' 
        ? 'text-green-700 bg-green-100 border-green-200' 
        : 'text-red-700 bg-red-100 border-red-200';
    }
  };

  const getYearColor = (year: string) => {
    if (isDark) {
      switch (year) {
        case 'Freshman': return 'text-blue-400 bg-blue-900/30 border-blue-500/20';
        case 'Sophomore': return 'text-purple-400 bg-purple-900/30 border-purple-500/20';
        case 'Junior': return 'text-orange-400 bg-orange-900/30 border-orange-500/20';
        case 'Senior': return 'text-pink-400 bg-pink-900/30 border-pink-500/20';
        default: return 'text-gray-400 bg-gray-800/30 border-gray-600/20';
      }
    } else {
      switch (year) {
        case 'Freshman': return 'text-blue-700 bg-blue-100 border-blue-200';
        case 'Sophomore': return 'text-purple-700 bg-purple-100 border-purple-200';
        case 'Junior': return 'text-orange-700 bg-orange-100 border-orange-200';
        case 'Senior': return 'text-red-700 bg-red-100 border-red-200';
        default: return 'text-gray-700 bg-gray-100 border-gray-200';
      }
    }
  };

  return (
    <div className={`
      rounded-xl shadow-2xl overflow-hidden border transition-all duration-300
      ${isDark 
        ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700/50' 
        : 'bg-white border-gray-200'
      }
    `}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`
            border-b transition-all duration-300
            ${isDark 
              ? 'bg-gradient-to-r from-slate-800 to-gray-800 border-gray-700' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 border-gray-200'
            }
          `}>
            <tr>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Student
                </div>
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </div>
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Major
                </div>
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  GPA
                </div>
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Year
                </div>
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                Status
              </th>
              <th className={`
                px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider
                ${isDark ? 'text-gray-300' : 'text-white'}
              `}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Enrollment
                </div>
              </th>
            </tr>
          </thead>
          <tbody className={`
            divide-y transition-all duration-300
            ${isDark ? 'divide-gray-700/50' : 'divide-gray-200'}
          `}>
            {students.map((student, index) => (
              <tr 
                key={student.id}
                className={`
                  transition-all duration-200
                  ${isDark 
                    ? `hover:bg-gray-700/30 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'}` 
                    : `hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`
                  }
                `}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <div className={`
                      text-sm font-medium transition-colors duration-300
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {student.name}
                    </div>
                    <div className={`
                      text-sm transition-colors duration-300
                      ${isDark ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {student.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`
                    text-sm transition-colors duration-300
                    ${isDark ? 'text-gray-300' : 'text-gray-900'}
                  `}>
                    {student.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`
                    text-sm font-medium transition-colors duration-300
                    ${isDark ? 'text-gray-200' : 'text-gray-900'}
                  `}>
                    {student.major}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getGpaColor(student.gpa)}`}>
                    {student.gpa.toFixed(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getYearColor(student.year)}`}>
                    {student.year}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(student.status)}`}>
                    {student.status}
                  </span>
                </td>
                <td className={`
                  px-6 py-4 whitespace-nowrap text-sm transition-colors duration-300
                  ${isDark ? 'text-gray-300' : 'text-gray-900'}
                `}>
                  {new Date(student.enrollmentDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;