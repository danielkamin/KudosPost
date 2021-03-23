import React from 'react'
import PropTypes from 'prop-types';
const StyledPost = ({content,kudos,group,author,likesCount,commentsCount})=>{
    return <div>
        {console.log(content,kudos,group,likesCount,commentsCount,author)}
    </div>
}

export default StyledPost

StyledPost.propTypes={
    content:PropTypes.string,
    kudos:PropTypes.object,
    group:PropTypes.string,
    likesCount:PropTypes.number,
    commentsCount:PropTypes.number,
    author:PropTypes.string,
}