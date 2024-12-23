import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ViewAccomodationOwnerTable from "./ViewAccomodationOwnerTable";
import ViewUserTable from "./ViewUserTable";


// import ViewUserTable from "./ViewUserTable";
// import ViewShopOwnerTable from "./ViewShopOwnerTable";

export default function ViewUserAndAccomodationOwner() {
    const [activeTab, setActiveTab] = React.useState("View AccomodationOwner");

    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none  bg-transparent p-0 mb-4 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide bg-indigo-100 border border-indigo-300  "
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-indigo-500 shadow-none rounded-none",
                    }}
                >

                    <Tab
                        key={'view AccomodationOwner'}
                        value={"View AccomodationOwner"}
                        onClick={() => setActiveTab('View AccomodationOwner')}
                        className={`${activeTab === 'View AccomodationOwner' ? 'text-indigo-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Accomodation Owner
                    </Tab>

                    <Tab
                        key={'view User'}
                        value={"View User"}
                        onClick={() => setActiveTab('View User')}
                        className={`${activeTab === 'View User' ? 'text-indigo-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        View User
                    </Tab>

                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">

                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap -p-9"
                        key={'View AccomodationOwner'} value={"View AccomodationOwner"}>
                        <ViewAccomodationOwnerTable />
                    </TabPanel>

                    <TabPanel key={'view User'} value={"View User"} className="-p-9">
                        <ViewUserTable />
                    </TabPanel>



                </TabsBody>
            </Tabs>
        </div>
    );
}