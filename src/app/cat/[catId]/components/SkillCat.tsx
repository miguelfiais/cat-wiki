interface ISkillCatProps {
  nameSkill: string
  quantity: number
}
const SkillCat = ({ nameSkill, quantity }: ISkillCatProps) => {
  return (
    <div className="flex items-center ">
      <p className="text-xs font-bold w-32">{nameSkill}: </p>
      <div className="flex gap-2">
        <div
          className={`w-8 h-3  rounded-full ${
            quantity >= 1 ? 'bg-amber-950' : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`w-8 h-3  rounded-full ${
            quantity >= 2 ? 'bg-amber-950' : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`w-8 h-3  rounded-full ${
            quantity >= 3 ? 'bg-amber-950' : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`w-8 h-3  rounded-full ${
            quantity >= 4 ? 'bg-amber-950' : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`w-8 h-3  rounded-full ${
            quantity >= 5 ? 'bg-amber-950' : 'bg-gray-200'
          }`}
        ></div>
      </div>
    </div>
  )
}

export default SkillCat
