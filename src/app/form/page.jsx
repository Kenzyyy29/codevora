"use client"

import Form from "../components/Form";

export default function form() {
    return (
     <div
      id="form"
      className="h-screen bg-gradient-to-b from-secondary to-primary">
      <section className="border rounded-lg w-96">
        <div>
            <Contact />
        </div>
      </section>
     </div>
    );
}