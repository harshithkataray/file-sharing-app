import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import Files from "../components/Files";

function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <Upload setRefresh={setRefresh} />
        <Files refresh={refresh} />
      </div>
    </>
  );
}

export default Home;
