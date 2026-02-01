import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
  onClose(): void;
}

export function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
  return (
    <Modal
      open
      onClose={onClose}
      title="Excluir"
    >
      Content
    </Modal>
  )
}
