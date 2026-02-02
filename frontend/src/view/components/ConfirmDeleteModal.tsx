import { Button } from "./Button";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
  onClose(): void;
}

export function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
  return (
    <Modal open onClose={onClose} title="Excluir">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-0 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900"/>
        </div>

        <p className="w-[180px] text-gray-800 tracking-[-0.5px] font-bold"> Tem certeza que deseja excluir essa conta? </p>

        <p className="text-gray-800 tracking-[-0.5px]">
          Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <Button className="w-full" variant="danger">
          Sim, desejo excluir
        </Button>

        <Button className="w-full" variant="ghost">
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
