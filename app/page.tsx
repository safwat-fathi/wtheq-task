import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is home page for Wtheq merchant dashboard",
};

const Payment = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">
        Welcome to Wtheq merchant dashboard
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem adipisci
        earum culpa quas obcaecati voluptas, qui explicabo eaque nobis placeat
        rem nam voluptate, ducimus saepe laboriosam eligendi praesentium odit
        nisi excepturi, ratione assumenda possimus iure! Nihil, sed qui?
        Provident voluptatum mollitia quaerat nihil consequuntur voluptatem
        labore nesciunt, impedit sunt ab.
      </p>
    </>
  );
};

export default Payment;
