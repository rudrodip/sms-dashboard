import { useState } from "react";
import { Card, Grid, DonutChart, Text, Title, Flex, Metric, BarChart } from "@tremor/react";
import Admin from "@/layouts/Admin";

export default function Home() {
  // const [class11, setClass11] = useState(class11)
  // const [class12, setClass12] = useState(class11)

  const totalStudents = class11.students + class12.students

  const maleRegistered = class11.male.registered + class12.male.registered
  const maleUnregistered = class11.male.unregistered + class12.male.unregistered

  const femaleRegistered = class11.female.registered + class12.female.registered
  const femaleUnregistered = class11.female.unregistered + class12.female.unregistered

  const otherRegistered = class11.other.registered + class12.other.registered
  const otherUnregistered = class11.other.unregistered + class12.other.unregistered

  const registered = maleRegistered + femaleRegistered
  const unregistered = maleUnregistered + femaleUnregistered

  

  return (
    <main className="p-6 sm:p-10">
      <Title className="text-white">Dashboard</Title>
      <Text className="text-gray-300">Rajshahi College Student Management System</Text>

      <Grid numColsLg={3} className="mt-6 gap-6">
        <Card className="bg-gray-700">
          <Text className="text-white">Total Students</Text>
          <Metric className="text-white">{totalStudents}</Metric>
          <Flex className="mt-4">
            <Text className="text-white">2021-2022 Education Year</Text>
            <Text className="text-white">Class 11 & Class 12</Text>
          </Flex>
        </Card>
        <Card className="bg-gray-700">
          <Text className="text-white">Registered Students</Text>
          <Metric className="text-white">{registered}</Metric>
          <Flex className="mt-4">
            <Text className="text-white">2021-2022 Education Year</Text>
            <Text className="text-white">Class 11 & Class 12</Text>
          </Flex>
        </Card>
        <Card className="bg-gray-700">
          <Text className="text-white">Registration In-Progress</Text>
          <Metric className="text-white">{unregistered}</Metric>
          <Flex className="mt-4">
            <Text className="text-white">2021-2022 Education Year</Text>
            <Text className="text-white">Class 11 & Class 12</Text>
          </Flex>
        </Card>
      </Grid>

      <Grid numColsLg={3} className="mt-6 gap-6">
        <Card className="max-w-lg bg-gray-700">
          <Title className="text-white">Students Registration</Title>
          <Text className="text-white">Registered: {registered}</Text>
          <Text className="text-white">Unregistered: {unregistered}</Text>
          <DonutChart
            className="mt-6"
            data={
              [
                {
                  name: "Registered",
                  num: registered,
                },
                {
                  name: "Unregistered",
                  num: unregistered,
                },
              ]
            }
            category="num"
            index="name"
            label="Students"
            showLabel={true}
            colors={['blue', 'indigo']}
          />
        </Card>

        <Card className="max-w-lg bg-gray-700">
          <Title className="text-white">Gender-based Students</Title>
          <Text className="text-white">Male: {maleRegistered + maleUnregistered}</Text>
          <Text className="text-white">Female: {femaleRegistered + femaleUnregistered}</Text>
          <Text className="text-white">Other: {otherRegistered + otherUnregistered}</Text>
          <DonutChart
            className="mt-6"
            data={
              [
                {
                  name: "Male",
                  num: maleRegistered + maleUnregistered,
                },
                {
                  name: "Female",
                  num: femaleRegistered + femaleUnregistered,
                },
                {
                  name: "Other",
                  num: otherRegistered + otherUnregistered
                }
              ]
            }
            category="num"
            index="name"
            label="Students"
            showLabel={true}
            colors={["rose", "cyan", "slate"]}
          />
        </Card>

        <Card className="max-w-lg bg-gray-700">
          <Title className="text-white">Class-based Students</Title>
          <Text className="text-white">Class 11: {class11.students}</Text>
          <Text className="text-white">Class 12: {class12.students}</Text>
          <BarChart
            className="mt-6"
            data={
              [
                {
                  name: "Class 11",
                  "Number of students": class11.students,
                },
                {
                  name: "Class 12",
                  "Number of students": class12.students,
                },
              ]
            }
            index="name"
            categories={["Number of students"]}
            colors={["blue"]}
            yAxisWidth={48}
          />
        </Card>
      </Grid>

      <Grid numColsLg={2} className="mt-6 gap-6">
        <Card className="max-w-lg bg-gray-700">
          <Title className="text-white">Class-based Students</Title>
          <Text className="text-white">Class 11: {class11.students}</Text>
          <Text className="text-white">Class 12: {class12.students}</Text>
          <BarChart
            className="mt-6"
            data={
              [
                {
                  name: "Class 11",
                  male: class11.male.registered + class11.male.unregistered,
                  female: class11.female.registered + class11.female.unregistered,
                  other: class11.other.registered + class11.other.unregistered,
                },
                {
                  name: "Class 12",
                  male: class12.male.registered + class12.male.unregistered,
                  female: class12.female.registered + class12.female.unregistered,
                  other: class12.other.registered + class12.other.unregistered,
                },
              ]
            }
            index="name"
            categories={["male", "female", "other"]}
            colors={["rose", "indigo", "teal"]}
            yAxisWidth={48}
          />
        </Card>

        <Card className="max-w-lg bg-gray-700">
          <Title className="text-white">Class-based Students</Title>
          <Text className="text-white">Class 11: {class11.students}</Text>
          <Text className="text-white">Class 12: {class12.students}</Text>
          <BarChart
            className="mt-6"
            data={
              [
                {
                  name: "Class 11",
                  "Male Registered": class11.male.registered,
                  "Male Unregistered": class11.male.unregistered,
                  "Female Registered": class11.female.registered,
                  "Female Unregistered": class11.female.unregistered,
                  "Other Registered": class11.other.registered,
                  "Other Unregistered": class11.other.unregistered,
                },
                {
                  name: "Class 12",
                  "Male Registered": class12.male.registered,
                  "Male Unregistered": class12.male.unregistered,
                  "Female Registered": class12.female.registered,
                  "Female Unregistered": class12.female.unregistered,
                  "Other Registered": class12.other.registered,
                  "Other Unregistered": class12.other.unregistered,
                },
              ]
            }
            index="name"
            categories={["Male Registered", "Male Unregistered", "Female Registered", "Female Unregistered", "Other Registered", "Other Unregistered"]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
          />
        </Card>
      </Grid>
    </main>
  );
}

Home.layout = Admin

const class11 = {
  students: 330,
  male: {
    registered: 0,
    unregistered: 150,
  },
  female: {
    registered: 0,
    unregistered: 180,
  },
  other: {
    registered: 0,
    unregistered: 0,
  },
}

const class12 = {
  students: 270,
  male: {
    registered: 3,
    unregistered: 117,
  },
  female: {
    registered: 1,
    unregistered: 149,
  },
  other: {
    registered: 0,
    unregistered: 0,
  },
}
