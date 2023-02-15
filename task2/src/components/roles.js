
const roleArr = [
    ["PRS for Music ", "Senior Partner Manager - Mediterranean, 2019 - present", "I am currently a regional senior manager specialising in direct licensing. My current roles incude managing multiple vendor agreements, tax, regulatory and administrative management over multiple European territories. In this role I mastered Business Development skills, license negotiation as well as people management. I also gained much experience in general international business management. I manage sales turnover of move than €10m annually."],
    ["PRS for Music ", "Publish Account Manager, 2016 - 2019", "I managed the relationships between PRS and our Major Publisher members ensuring correct royalties flowed on time. I would be responsible for £10-£15m annual royalties. This role gave me a deep understanding of customer services as this relationship was critical to the continued sucess of the business."],
    ["PRS for Music ", "Broadcast Licensing Consultant, 2012 - 2016", "In this role I was in charge of managing the Sync licensing for MCPS and many thousands of libraries. I would be account managing both audio and TV production accounts. This was a great insight into The world of TV and Music."]
]


function Roles() {
    const roleList = roleArr.map((roleList) => {
        return <li key={roleList.toString()}>
            <h1>{roleList[0]}</h1>
            <br></br>
            <h5>{roleList[1]}</h5>
            <br></br>
            <p>{roleList[2]}</p>
        </li>;
    });

    return(
        <div>
            <ul>
            {roleList}
            </ul>
        </div>
        
    )
}

export default Roles