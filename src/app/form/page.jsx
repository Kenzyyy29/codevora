"use client"

import Form from "../../components/Form";

export default function form() {
    return (
     <div
      id="form"
      className="h-screen bg-gradient-to-b from-secondary to-primary">
      <section className="py-[8%] px-40">
        <div>
            <Form />
        </div>
      </section>
     </div>
    );
}