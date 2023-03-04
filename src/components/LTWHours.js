import { InformationCircleIcon } from "@heroicons/react/outline";
import { Card, Title, AreaChart, Icon, Flex } from "@tremor/react";

export default function LTWHours({data}) {
    const lTWHoursArr = data;

    const dataFormatter = (number) => {
        return Intl.NumberFormat("us").format(number).toString();
    };

    return (
        <Card>
            <Flex alignItems="align-top">
                <Title>Hours of Sessions</Title>
                <Icon
                    icon={InformationCircleIcon}
                    variant="simple"
                    tooltip="Each x-axis marker represents a week, which begins on Sunday based on the Gregorian calendar"
                    color="slate"
                />
            </Flex>
            <AreaChart
                data={lTWHoursArr}
                categories={["Hours of Sessions"]}
                dataKey="Week of"
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth="w-10"
                showLegend={false}
                height="h-80"
                marginTop="mt-6"
                startEndOnly={true}
            />
        </Card>
    );
};