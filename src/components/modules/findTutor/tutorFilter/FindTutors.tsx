"use client"
import { Button } from "@/components/ui/button";
import TutorsCard from "@/components/ui/cors/TutorsCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const FindTutors = () => {

    const [filters, setFilters] = useState({
        subject: "",
        rating: "",
        price: "",
        availability: "",
        location: "",
      });
    
      const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
      };

  return (
    <div>
      <div className="mb-16">
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4 md:flex-row md:items-center">
      {/* Subject Filter */}
      <Select onValueChange={(value) => handleFilterChange("subject", value)}>
        <SelectTrigger className="w-full md:w-40">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="math">Math</SelectItem>
          <SelectItem value="science">Science</SelectItem>
          <SelectItem value="english">English</SelectItem>
        </SelectContent>
      </Select>

      {/* Rating Filter */}
      <Select onValueChange={(value) => handleFilterChange("rating", value)}>
        <SelectTrigger className="w-full md:w-40">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5 Stars</SelectItem>
          <SelectItem value="4">4+ Stars</SelectItem>
          <SelectItem value="3">3+ Stars</SelectItem>
        </SelectContent>
      </Select>

      {/* Price Filter */}
      <Input
        type="number"
        placeholder="Max Price ($/hr)"
        className="w-full md:w-40"
        onChange={(e) => handleFilterChange("price", e.target.value)}
      />

      {/* Availability Filter */}
      <Select onValueChange={(value) => handleFilterChange("availability", value)}>
        <SelectTrigger className="w-full md:w-40">
          <SelectValue placeholder="Availability" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="morning">Morning</SelectItem>
          <SelectItem value="afternoon">Afternoon</SelectItem>
          <SelectItem value="evening">Evening</SelectItem>
        </SelectContent>
      </Select>

      {/* Location Filter */}
      <Input
        type="text"
        placeholder="Location"
        className="w-full md:w-40"
        onChange={(e) => handleFilterChange("location", e.target.value)}
      />

      {/* Apply Filter Button */}
      <Button className="w-full md:w-auto">Apply Filters</Button>
    </div></div>
      <div>
        <TutorsCard />
      </div>
    </div>
  );
};

export default FindTutors;
