import styled from "styled-components";


export const PaginationWrapper = styled.div ` 
  display:flex;
  align-items:center;
  justify-content:center;
  column-gap:0.5rem;
  padding-top:1rem;

  .btn {
    display:flex;
    place-items:center;
    background:var(--tertiary-100);
    color:var(--secondary-100);
    font-weight:600;
  }

  .icon-left {
    margin-right:5px;
  }

  .icon-right {
    margin-left:5px;
  }

  .btn-center {
    border:0;
    cursor: pointer;
  }
  .active {
    background:var(--tertiary-100);
    font-weight:600;

  }

`