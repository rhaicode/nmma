type TableEventArgs = {
  ref: React.RefObject<HTMLDivElement>
}

type TableMouseEvent = React.MouseEventHandler<HTMLDivElement> | undefined

const useTableEvents = ({ ref }: TableEventArgs) => {
  let pos = {
    left: ref.current?.scrollLeft,
    top: ref.current?.scrollTop,
    x: 0,
    y: 0,
  }

  const mouseMoveHandler = (e: MouseEvent) => {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x!
    const dy = e.clientY - pos.y!

    // Scroll the element
    if (ref.current) {
      /* eslint-disable */
      ref.current.scrollTop = pos.top! - dy
      /* eslint-disable */
      ref.current.scrollLeft = pos.left! - dx
    }
  }
  const mouseUpHandler = () => {
    if (ref.current) {
      ref.current.style.cursor = 'grab'
      ref.current.style.removeProperty('user-select')
    }
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  const mouseDownHandler: TableMouseEvent = e => {
    pos = {
      left: ref.current?.scrollLeft,
      top: ref.current?.scrollTop,
      x: e.clientX,
      y: e.clientY,
    }
    if (ref.current) {
      ref.current.style.cursor = 'grabbing'
      ref.current.style.userSelect = 'none'
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  return { mouseDownHandler }
}

export default useTableEvents
