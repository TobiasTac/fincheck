import { Modal } from "../../../../components/Modal";

interface FIltersModalProps {
  open: boolean;
  onClose(): void;
}

export function FiltersModal({ open, onClose }: FIltersModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="filtros">
      Filtros...
    </Modal>
  )
}
