import * as Dialog from '@radix-ui/react-dialog';

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <h1>Modal Aberto</h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
