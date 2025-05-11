"use client";
import React from "react";
import { Mail, Phone, MapPin, FileText, Hash } from "lucide-react";

export const ProducerCompanyDetails: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          M/S SAI SADGGURU HANDICRAFTS PRODUCER COMPANY LIMITED, HYDERABAD
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-start gap-3">
            <FileText className="text-green-600" />
            <p>
              <strong>Registration Number:</strong> U17299TG2022PTC168891
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Hash className="text-green-600" />
            <p>
              <strong>PC Darpan ID:</strong> TS/2023/0347242
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Hash className="text-green-600" />
            <p>
              <strong>PAN No:</strong> ABJCS8676F
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Hash className="text-green-600" />
            <p>
              <strong>GST No:</strong> 36ABJCS8676F1ZQ
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-green-600" />
            <p>
              <strong>Email:</strong> sshpcl2022@gmail.com
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-green-600" />
            <p>
              <strong>Contact:</strong> 9701916630, 9030030033
            </p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-green-600" />
            <p>
              <strong>Address:</strong> 8-3-1109/2, Flat No.101, Subhadra
              Enclave, Kesav Nagar, Sri Nagar Colony Main Road, Hyderabad,
              Telangana-500073
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
