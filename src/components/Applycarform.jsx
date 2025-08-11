import React, { useState } from "react";
import { User, Mail, Phone, Calendar, MapPin } from "lucide-react";

const ApplyCarForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    socialSecurityNumber: "",
    homeOwnership: "",
    monthlyMortgageRent: "",
    yearsMonthsAtAddress: "",
    streetAddress: "",
    secondStreetAddress: "",
    city: "",
    stateProvince: "",
    postalZipCode: "",
    workPhoneNumber: "",
    grossMonthlyIncome: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleTrim: "",
    vehicleMileage: "",
    vehicleColor: "",
    fullPriceOfVehicle: "",
    loanAmount: "",
    loanTerm: "",
    preferredPayment: "",
    hasCoSigner: "",
    loanType: "",
    coSignerFirstName: "",
    coSignerLastName: "",
    coSignerPhoneNumber: "",
    coSignerSSN: "",
    signature: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8">
      <img
        src="Image1applycar.png"
        alt="Car Application"
        className="w-[400px]"
      />
      <div className="max-w-4xl mx-auto bg-[#f3f3f3] rounded-lg shadow-lg overflow-hidden">
        <div className=" p-6 text-center">
          <div className="flex items-center justify-center mb-4"></div>
          <h2 className="text-3xl font-bold text-black tracking-wide">
            PRE-APPROVAL APPLICATION
          </h2>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone number<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="(000) 000 0000"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth<span className="text-red-500">*</span>
                <span className="text-gray-400 text-sm pl-72">date</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="MM-DD-YYYY"
                  className="w-full pl-2 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Social Security Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="socialSecurityNumber"
                value={formData.socialSecurityNumber}
                onChange={handleInputChange}
                placeholder="eg.,23"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Do you own or rent your home?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-48">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="homeOwnership"
                  value="own"
                  checked={formData.homeOwnership === "own"}
                  onChange={(e) =>
                    handleRadioChange("homeOwnership", e.target.value)
                  }
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-700">Own</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="homeOwnership"
                  value="rent"
                  checked={formData.homeOwnership === "rent"}
                  onChange={(e) =>
                    handleRadioChange("homeOwnership", e.target.value)
                  }
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-700">Rent</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="homeOwnership"
                  value="live with parents"
                  checked={formData.homeOwnership === "live with parents"}
                  onChange={(e) =>
                    handleRadioChange("homeOwnership", e.target.value)
                  }
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-700">live with parents</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Monthly Mortgage/Rent<span className="text-red-500">*</span>
                <span className="text-gray-400 text-sm pl-48">in USD</span>
              </label>

              <input
                type="text"
                name="monthlyMortgageRent"
                value={formData.monthlyMortgageRent}
                onChange={handleInputChange}
                placeholder="eg.,23"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Years/Months at Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="yearsMonthsAtAddress"
                value={formData.yearsMonthsAtAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className=" text-center text-lg font-semibold text-gray-700 mb-2 pb-2 border-b border-gray-500 max-w-[200px] mx-auto">
              Current Address<span className="text-red-500">*</span>
            </h3>

            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2nd Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondStreetAddress"
                value={formData.secondStreetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  State / Province<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Are You Currently Working?
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-48">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="Yes"
                    value="yes"
                    checked={formData.homeOwnership === "yes"}
                    onChange={(e) => handleRadioChange("Yes", e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="No"
                    value="no"
                    checked={formData.homeOwnership === "no"}
                    onChange={(e) => handleRadioChange("No", e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>
            <h3 className=" text-center text-lg font-semibold text-gray-700 mb-2 pb-2 border-b border-gray-500 max-w-[200px] mx-auto">
              Work Address<span className="text-red-500">*</span>
            </h3>

            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                2nd Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondStreetAddress"
                value={formData.secondStreetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  State / Province<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Postal / Zip Code<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postalZipCode"
                  value={formData.postalZipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Work Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="workPhoneNumber"
                  value={formData.workPhoneNumber}
                  onChange={handleInputChange}
                  placeholder="(000) 000 0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2 mt-6 w-[490px]">
              <label className="block text-sm font-medium text-gray-700">
                Gross Monthly Income<span className="text-red-500">*</span>
                <span className="text-gray-400 text-sm pl-72">in USD</span>
              </label>
              <input
                type="text"
                name="grossMonthlyIncome"
                value={formData.grossMonthlyIncome}
                onChange={handleInputChange}
                placeholder="eg.,23"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
              Requested Vehicle Details<span className="text-red-500">*</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              ]
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Year<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleInputChange}
                  placeholder="MM-DD-YYYY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Make<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  placeholder="eg.,23"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Model<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="MM-DD-YYYY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Trim<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleTrim"
                  value={formData.vehicleTrim}
                  onChange={handleInputChange}
                  placeholder="eg.,23"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mileage<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleMileage"
                  value={formData.vehicleMileage}
                  onChange={handleInputChange}
                  placeholder="MM-DD-YYYY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Color<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleColor"
                  value={formData.vehicleColor}
                  onChange={handleInputChange}
                  placeholder="eg.,23"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2 mt-4 w-[465px]">
              <label className="block text-sm font-medium text-gray-700">
                Full Price of Vehicle<span className="text-red-500">*</span>
                <span className="text-gray-400 text-sm pl-72">in USD</span>
              </label>
              <input
                type="text"
                name="fullPriceOfVehicle"
                value={formData.fullPriceOfVehicle}
                onChange={handleInputChange}
                placeholder="eg.,23"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
              Requested Loan Details<span className="text-red-500">*</span>
            </h3>

            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="eg.,23"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <span className="text-gray-400 text-sm">in USD</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Term<span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="loanTerm"
                      value="1 Year"
                      checked={formData.loanTerm === "1 Year"}
                      onChange={(e) =>
                        handleRadioChange("loanTerm", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">1 Year</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="loanTerm"
                      value="2 Year"
                      checked={formData.loanTerm === "2 Year"}
                      onChange={(e) =>
                        handleRadioChange("loanTerm", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">2 Year</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="loanTerm"
                      value="3 Year"
                      checked={formData.loanTerm === "3 Year"}
                      onChange={(e) =>
                        handleRadioChange("loanTerm", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">3 Year</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Payment<span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredPayment"
                      value="Monthly"
                      checked={formData.preferredPayment === "Monthly"}
                      onChange={(e) =>
                        handleRadioChange("preferredPayment", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">Monthly</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredPayment"
                      value="Yearly"
                      checked={formData.preferredPayment === "Yearly"}
                      onChange={(e) =>
                        handleRadioChange("preferredPayment", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">Yearly</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredPayment"
                      value="Other"
                      checked={formData.preferredPayment === "Other"}
                      onChange={(e) =>
                        handleRadioChange("preferredPayment", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Do you have a co-signer?
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasCoSigner"
                      value="Yes"
                      checked={formData.hasCoSigner === "Yes"}
                      onChange={(e) =>
                        handleRadioChange("hasCoSigner", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasCoSigner"
                      value="No"
                      checked={formData.hasCoSigner === "No"}
                      onChange={(e) =>
                        handleRadioChange("hasCoSigner", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Loan Type<span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="loanType"
                      value="Used Car"
                      checked={formData.loanType === "Used Car"}
                      onChange={(e) =>
                        handleRadioChange("loanType", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">Used Car</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="loanType"
                      value="New Car"
                      checked={formData.loanType === "New Car"}
                      onChange={(e) =>
                        handleRadioChange("loanType", e.target.value)
                      }
                      className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-gray-700">New Car</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Co-signer name<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="coSignerFirstName"
                  value={formData.coSignerFirstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="coSignerLastName"
                  value={formData.coSignerLastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Co-signer's Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="coSignerPhoneNumber"
                  value={formData.coSignerPhoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Co-signer's Social Security Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="coSignerSSN"
                  value={formData.coSignerSSN}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <span className="text-gray-400 text-sm">Without dashes</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-black mb-4">
              Permission to Obtain Consumer Credit Report
            </h3>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                By signing this application form, I hereby give the right to
                obtain a consumer credit report regarding me for this
                application and the car loan should my application be approved.
                I also release from all liability all persons, companies, and
                corporations supplying such information. The indemnity "XYZ
                Bank" the against any liability that might result from making
                such an investigation.
              </p>
              <p>
                I certify that the information above is correct to the best of
                my knowledge. I authorize "XYZ Bank" to make inquiries as
                necessary to verify the accuracy of the statements made by me
                and to determine my creditworthiness. I agree to pay the
                required sums and I agree to be bound by the loan agreement if
                my application is accepted.
              </p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Signature<span className="text-red-500">*</span>
              </label>
              <div className="w-full h-24 border-2 border-gray-300 rounded-md bg-white p-2">
                <textarea
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  placeholder="Type your full name here as digital signature"
                  className="w-full h-full border-none outline-none resize-none text-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-right">
            <p className="text-sm text-gray-600 mb-4">
              Don't have a dealership offer?
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Click HERE to get a free quote.
              </a>
            </p>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-md transition duration-200 text-lg tracking-wide"
            >
              SUBMIT NOW →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCarForm;
