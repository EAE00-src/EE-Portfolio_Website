

const DecoTags = ({ tag, tagType = '', }) =>{

   return( 
   <span className={tagType}>
        {`<${tag}>`}
   </span>
   );
};

export default DecoTags;