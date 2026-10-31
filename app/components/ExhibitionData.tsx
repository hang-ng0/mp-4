"use server"
import {fetchData} from "@/app/components/fetchData";
import styled from "styled-components";
import Header from "@/app/components/Header";

const StyledIndividualDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FCF0DA;
    margin: 2%; 
    padding: 1%;
`;

const StyledImage = styled.img`
    width: 70%;
    height: auto;
    margin: auto;
    
`;

const StyledDiv = styled.div`
    width: 100%;
    background-color: #AEAC78;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
`;

const StyledP = styled.p`
    padding: 1%;
`;

const StyledHeader = styled.h1`
    padding: 1%;
`;


export default async function ExhibitionData(){
    const data = await fetchData();

    return(
        <>
            <Header/>
            <StyledDiv>{data.map((exhibition: any) => (
                <StyledIndividualDiv key={exhibition.id}>
                    <StyledHeader>{exhibition.title}</StyledHeader>
                    <StyledImage src={exhibition.primaryimageurl} alt={exhibition.title}/>
                    {/*A lot of the data doesn't have images*/}
                    <StyledHeader>{exhibition.datebegin} - {exhibition.dateend}</StyledHeader>
                    <StyledP>{exhibition.description}</StyledP>
                    <StyledP>{exhibition.classification}</StyledP>
                    <StyledP>{exhibition.medium}</StyledP>
                </StyledIndividualDiv>
            ))}</StyledDiv>
        </>
    )
}

// Code for testing client side api fetching below; please ignore, I couldn't get it to work

// export default function Data(){
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         async function getData() {
//             try {
//                 const response = await fetchData();
//                 setItems(response?.data ?? []);
//             } catch(error) {
//                 console.log("Error:", error);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         getData();
//         },
//     []);
//
//     if (loading) return <p>Loading...</p>;
//
//     return(
//         <ul>
//             {items.map((item) => (
//                 <li key={item.id}>{item.title}</li>
//             ))}
//         </ul>
//     )
//
// }
