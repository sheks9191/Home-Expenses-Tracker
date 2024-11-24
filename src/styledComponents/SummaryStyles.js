import styled from "styled-components";




export const SummaryWrapper = styled.div` 

.summary-component {
  
  margin-top:5rem;
}


.summary-body {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
    gap:1rem;
    margin:2rem 0;
}

.item-summary {
    background:var(--tertiary-100);
    color:var(--secondary-100);
    position: relative;
    text-align: center;
    letter-spacing:1px;
    box-shadow: var(--shadow-2);
    border-radius:5px;

}

.item-name {
  color:var(--grey-600);
}

.item-total {
    font-size:0.8rem;
     color:var(--grey-500);
    
}

.item-count {
   position:absolute;
   background:var(--secondary-100);
   top:0;
   right:0;
   width:25px;
   height:25px;
   transform: translateY(-16px);
}

.income{
    color:greenyellow;
}

.expense {
    color:orange;
}

`