import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import './App.css'

class App extends Component {
  state = {underline: false, italic: false, bold: false}

  onClickOnBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickOnItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickOnUnder = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {underline, italic, bold} = this.state
    const underlineClass = underline ? 'underline' : 'normal'
    const italicClass = italic ? 'italic' : 'normal'
    const boldClass = bold ? 'bold' : 'normal'
    const activeBold = bold ? '#faff00' : '#f1f5f9'
    const activeItalic = italic ? '#faff00' : '#f1f5f9'
    const activeUnder = underline ? '#faff00' : '#f1f5f9'
    return (
      <div className="main-container">
        <div className="text-editor-container">
          <div className="heading-container">
            <h1 className="main-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
              className="img"
            />
          </div>
          <div className="text-container">
            <ul className="icons">
              <li>
                <button
                  type="button"
                  className={`icon button ${activeBold}`}
                  style={{color: `${activeBold}`}}
                  data-testid="bold"
                  onClick={this.onClickOnBold}
                >
                  <VscBold size={25} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="icon button"
                  style={{color: `${activeItalic}`}}
                  data-testid="italic"
                  onClick={this.onClickOnItalic}
                >
                  <GoItalic size={25} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="icon button "
                  data-testid="underline"
                  style={{color: `${activeUnder}`}}
                  onClick={this.onClickOnUnder}
                >
                  <AiOutlineUnderline size={25} />
                </button>
              </li>
            </ul>
            <textarea
              className="text"
              style={{
                textDecoration: `${underlineClass}`,
                fontStyle: `${italicClass}`,
                fontWeight: `${boldClass}`,
              }}
              rows="40"
              cols="50"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
