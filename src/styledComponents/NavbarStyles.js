import styled from "styled-components";




export const NavbarWrapper = styled.div`



.nav-content{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:5rem;
    /* background-color:red; */
}

.menu-container {

 display:grid;
 place-items:center;
 grid-template-columns:repeat(3 ,1fr);
 cursor: pointer;
}

 .menu{
        width:4px;
        height:4px;
        border-radius:50%;
        background:var(--white);
        margin:2px;
        
    }

.logo-content {
    display:flex;
    align-items:center;
}

.logo-container {
    overflow:visible;
    height:5rem;
    margin-left:3rem;

}

.logo-img{
width:100%;
  object-fit:center;
}

.nav-center {
    display:flex;
    place-items:center;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-transform:uppercase;
    letter-spacing:1px;

    span {
        display:flex;
        align-items:center;
        margin-right:0.8rem;
        transition:var(--transition);
    }
}

.icon{
    font-size:1.7rem;
}

.text{
   color:var(--custom-100);
   
}
.name{
    color:var(--tertiary-100);
    font-weight: 500;
}

.user {
    display:flex;
    align-items:center;
    gap:0.5rem;
    background:var(--tertiary-100);
    padding:0 3px;
    border-radius:3px;
    color:var(--secondary-100);
    font-family: "Poppins", sans-serif;
    box-shadow:var(--shadow-4);
    cursor: pointer;
    position:relative;

    span {
        text-transform:uppercase;
        font-weight:600;
    }
}

.logout-btn {
    position:absolute;
    top:3rem;
    display:block;
    width:100%;
    height:1.6rem;
    letter-spacing:1px;
    cursor: pointer;
    background:var(--tertiary-100);
    border:0;
    border-radius:3px;
    color:var(--secondary-100);
    z-index: 100;
    box-shadow:var(--shadow-4);
}



`