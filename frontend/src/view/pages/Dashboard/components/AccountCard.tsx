import { CategoryIcon } from "../../../components/icons/categories/CategoryIcon";

export function AccountCard() {
  return (
    <div className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between">
      <div>
        <CategoryIcon type="income" />
        <span className="text-gray-800 font-medium traking-[-0.5px] mt-4 block">
          Nubank
        </span>
      </div>

      <div>
        <span className="text-gray-800 font-medium traking-[-0.5px] block">
          R$ 123,00
        </span>
        <small className="text-gray-400 text-sm">
          Saldo atual
        </small>
      </div>
    </div>
  )
}
