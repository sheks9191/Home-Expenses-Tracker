import styled from "styled-components";


export const BudgetWrapper = styled.div ` 

.monthly-budget {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1rem;
  padding:1rem 0;
}

.select {
    display:flex;
    flex-direction:column;

    select {
        margin-top:0.5rem;
    }
}

.budget-btn {
   width:100%;
   
   display:flex;
   align-items:center;
}

button {
    cursor: pointer;
    border-radius:5px;
    background:var(--tertiary-100);
    width:100%;
    margin-top:1rem;
}

.monthly-budgets {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:1rem;
    margin-bottom:3rem;
}

.budget-exp {
    background:var(--white);
    height:110px;
    border-radius:5px;
    position:relative;
    box-shadow:var(--shadow-4);
}

.budget-exp:hover .delete-icon {
  display:block;
}

.delete-icon {
  position:absolute;
  bottom:0px;
  right:0px;
  display:none;
}

.delete-icon .btn-delete {
    background:transparent !important;
    border:0;
   }


.month,.date {
   text-transform:uppercase; 
   font-weight:500;
   
}

  .budget-exp .header {
    background:var(--tertiary-100);
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
    height:40px;
    color:var(--secondary-100);
    border-bottom:3px solid var(--secondary-100);
    padding:0 10px;

  } 

  .content{
    padding:0 10px;
    line-height:0;
  }

  .content p {
    line-height:0;
    margin:15px 0;
    font-size:0.8rem;
    letter-spacing:1.5px;
    color:var(--secondary-100);
    opacity:0.6;

  }

   .negative{
        color:orange !important;
        font-weight:500;
        opacity:1 !important;
    }

     .positive{
        color:limegreen !important;
        font-weight:500;
        opacity:1 !important;
    }

    @media (max-width:720px ){
     .monthly-budget {
  
  grid-template-columns:1fr;
  
}
    }

`