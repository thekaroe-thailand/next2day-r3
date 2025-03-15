'use client'

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('kob');

  const handleChangeName = () => {
    setName('new name');
  }

  return (
    <div>
      <div className="text-4xl">
        Hello {name}
      </div>
      <div className="flex gap-4">
        <input onChange={e => setName(e.target.value)} className="input" />
        <button onClick={handleChangeName} className="btn">
          Change Name
        </button>
      </div>
    </div>
  );
}
