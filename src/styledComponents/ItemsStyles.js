import styled from "styled-components";


export const ItemWrapper = styled.div`

.items-component {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
    gap:1rem;
}
.item-component{
    /* border:2px solid red; */
    position:relative;
    background:var(--white);
    padding:0.3rem 0.5rem;
    color:var(--black);
    box-shadow:var(--shadow-4);
    border-radius:5px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
}

.item-content {
   p:nth-of-type(1){
      background:var(--secondary-100);
      width:2rem;
      height:2rem;
      display:grid;
      place-items:center;
      color:var(--tertiary-100);
      font-weight:600;
    }
}

  .type{
        letter-spacing:1px;
        position:absolute;
        top:-1.1rem;;
        left:0.5rem;
        font-size:0.9rem;    
    }

    .date {
        position:absolute;
        top:5px;
        right:5px;
        font-size:0.7rem;
        font-weight:600;
        display:grid;
        place-items:center;

        .icon{
            font-size:1rem;
        }
    }

    .amount {
        position:absolute;
        left:0.5rem;
        bottom:-1.5rem;
        color:orange;
        font-weight:500;
        font-size:0.9rem;
    }
    

.item-btn{
    position:absolute;
    right:0;
    bottom:0.1rem;
} 

.btn-delete,.btn-edit {
    margin-right:5px;
    cursor: pointer;
    background:transparent;
    border:0;
    background:var(--secondary-100);
    color:var(--tertiary-100);
    transition: 0.3s ease-in-out;

    :hover{
        transform:scale(1.2);
    }
}

.edit-input {
    width:50px;
}

.form-search {

   margin-bottom:3rem;
   
}

.search-container {
    display:flex;
   align-items:center;
   justify-content:center;
    position: relative;
    width:70%; 
    margin:0 auto;

    input {
    width:100%;
    
    padding:0.6rem 0.8rem;
    font-size:1.1rem;
    letter-spacing:1px;
    background:transparent;
    border:0;
    border-bottom:2px solid var(--tertiary-100);
    color:var(--custom-100);
    border-radius:15px;

   }

   input:focus{
    outline:0;
   }
}

.search-btn {
    position:absolute;
    right:-30px;
    bottom:0px;
    background:transparent;
    border:0;
    color:var(--tertiary-100);
    cursor: pointer;
    font-size:1.3rem;
}



`