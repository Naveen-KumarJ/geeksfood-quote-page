import React from "react";

function QuoteCard({ info, idx }) {
  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        padding:"20px",
        maxWidth:"750px",
        borderRadius:"10px",
        alignSelf: idx % 2 == 0 ? "flex-start" : "flex-end"
      }}
    >
      <h2 style={{textAlign:"center", color:"white"}}>{info.quote}</h2>
      <p style={{color:"#ffffffd6"}}>{info.writer}</p>
    </div>
  );
}

export default QuoteCard;
