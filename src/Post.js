import React from 'react' ;
import PropTypes from 'prop-types' ;

function Post({id,title,deletePost,editPost}) {
    return (
        <div className="Post" >
            <button className= "Post-delete" onClick={() => deletePost(id)}>X</button>  
            <button className= "Post-edit" onClick={() => editPost(id)}>Edit</button>
            <div className = "Post-title">{title}</div>
        </div>
    );

}

Post.propTypes = {
    id: PropTypes.number.isRequired ,
    title: PropTypes.string.isRequired, 
    deletePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired
};

export default Post ;