import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function Bookings() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>House Name</TableColumn>
        <TableColumn>No of days</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>End Date</TableColumn>
        <TableColumn>Total amount</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
  <TableRow key="1">
    <TableCell>Tony Stark</TableCell>
    <TableCell>Stark Mansion</TableCell>
    <TableCell>7</TableCell>
    <TableCell>2024-07-01</TableCell>
    <TableCell>2024-07-08</TableCell>
    <TableCell>$3500</TableCell>
    <TableCell className="text-orange-400">Active</TableCell>
  </TableRow>
  <TableRow key="2">
    <TableCell>Steve Rogers</TableCell>
    <TableCell>Brooklyn Apartment</TableCell>
    <TableCell>5</TableCell>
    <TableCell>2024-07-10</TableCell>
    <TableCell>2024-07-15</TableCell>
    <TableCell>$2000</TableCell>
    <TableCell className="text-blue-300">Pending</TableCell>

  </TableRow>
  <TableRow key="3">
    <TableCell>Natasha Romanoff</TableCell>
    <TableCell>Safe House</TableCell>
    <TableCell>3</TableCell>
    <TableCell>2024-07-20</TableCell>
    <TableCell>2024-07-23</TableCell>
    <TableCell>$1200</TableCell>
    <TableCell className="text-green-500">Finished</TableCell>
  </TableRow>
  <TableRow key="4">
    <TableCell>Bruce Banner</TableCell>
    <TableCell>Quiet Cottage</TableCell>
    <TableCell>10</TableCell>
    <TableCell>2024-08-01</TableCell>
    <TableCell>2024-08-11</TableCell>
    <TableCell>$4000</TableCell>
    <TableCell className="text-blue-300">Pending</TableCell>

  </TableRow>
  <TableRow key="5">
    <TableCell>Thor Odinson</TableCell>
    <TableCell>Asgardian Suite</TableCell>
    <TableCell>14</TableCell>
    <TableCell>2024-08-15</TableCell>
    <TableCell>2024-08-29</TableCell>
    <TableCell>$7000</TableCell>
    <TableCell className="text-blue-300">Pending</TableCell>

  </TableRow>
</TableBody>
    </Table>
  );
}
