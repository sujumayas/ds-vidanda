import CategoryList from '../ui/CategoryList'
import FilterList from '../ui/FilterList'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 border-r">
      <CategoryList />
      <FilterList />
    </aside>
  )
}