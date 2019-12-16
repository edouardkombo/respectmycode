import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div>
            <h1>#RespectMyCode</h1>
            <h3><b class='bold-mauve'>#1st</b> <b>remote cto school</b> via Slack.</h3>
            <p><b class='bold-green'>Connecting</b> the next generation of <b class='bold-green'>value contributors, per project</b>.</p>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('school-manifesto')}}>School Manifesto</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('recruitment-without-cv')}}>Recruitment Without CV</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('coding-ceremony')}}>Coding Ceremony</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Become Student</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
