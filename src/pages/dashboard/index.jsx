import React, { useState } from "react";
import Card from "@/components/ui/Card";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import RevenueBarChart from "@/components/partials/widget/chart/revenue-bar-chart";
import RadialsChart from "@/components/partials/widget/chart/radials";
import SelectMonth from "@/components/partials/SelectMonth";
import CompanyTable from "@/components/partials/Table/company-table";
import RecentActivity from "@/components/partials/widget/recent-activity";
import MostSales from "../../components/partials/widget/most-sales";
import RadarChart from "../../components/partials/widget/chart/radar-chart";
import HomeBredCurbs from "./HomeBredCurbs";

import Logo from '@/assets/images/logo/nighthawk.png';


const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>

      <img src={Logo} alt="" className="md:w-[700px] h-auto mx-auto" />
  
  
        
    </div>
  );
};

export default Dashboard;
