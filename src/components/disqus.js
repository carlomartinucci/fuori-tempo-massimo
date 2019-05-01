import React from "react"

const Comments = props => {
  React.useEffect(() => {
    global.disqus_config = function() {
      this.page.url = props.url
      this.page.identifier = props.identifier
    }
    const s = document.createElement("script")

    s.src = "https://fuori-tempo-massimo.disqus.com/embed.js"
    s.setAttribute("data-timestamp", +new Date())

    const parentNode = document.head || document.body

    parentNode.appendChild(s)

    return () => {
      parentNode.removeChild(s)
      global.disqus_config = undefined
    }
  })

  return <div id="disqus_thread" />
}

const Count = props => {
  return null
}

export default { Comments, Count }
