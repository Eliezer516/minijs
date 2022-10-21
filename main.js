import './style.css'

var editor = ace.edit("editor")
editor.setTheme("ace/theme/dracula")
editor.session.setMode("ace/mode/javascript")

const updatePreview = () => {
  const code = editor.getValue()
  const jsForIframe = `<script>${code}</script>`

  document.querySelector('iframe').setAttribute('srcdoc', jsForIframe)
}

document.querySelector('#run').onclick = () => {
  updatePreview()
}
