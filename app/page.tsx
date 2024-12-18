import GuideSection from "@/components/dofinansowanie-studia";
import EducationalServicesRows from "@/components/educational-services-rows";
import Row from "@/components/row";

export default function Page() {
  return (
    <>
      <div className="">
        <Row />
        <GuideSection />
        <EducationalServicesRows />
      </div>
    </>
  );
}
