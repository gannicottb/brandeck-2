
interface CardProps {
  data: string
}
export default function Card({ data }: CardProps) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-green-400 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="text-xl font-medium text-black">{data}</div>
    </div>
  )
}