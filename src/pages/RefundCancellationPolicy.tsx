import React from 'react';

const RefundCancellationPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Refund and Cancellation Policy</h1>
      <p className="mb-4">Thank you for choosing tripmeindia.com for your travel needs. We understand that plans can change, and we strive to be as flexible as possible. Please read our refund and cancellation policy carefully.</p>

      <h2 className="text-2xl font-semibold mb-4">1. Cancellation by Customer</h2>
      <h3 className="text-xl font-medium mb-2">Tour Packages:</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>More than [X] days before departure:</strong> [Y]% of the total package cost will be refunded.</li>
        <li><strong>Between [X] and [Z] days before departure:</strong> [A]% of the total package cost will be refunded.</li>
        <li><strong>Less than [Z] days before departure:</strong> No refund will be issued.</li>
        <li><strong>No-show:</strong> No refund will be issued.</li>
      </ul>

      <h3 className="text-xl font-medium mb-2">Cab Services:</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>More than [P] hours before pickup:</strong> Full refund.</li>
        <li><strong>Between [P] and [Q] hours before pickup:</strong> [R]% of the total fare will be refunded.</li>
        <li><strong>Less than [Q] hours before pickup:</strong> No refund will be issued.</li>
        <li><strong>No-show:</strong> No refund will be issued.</li>
      </ul>
      <p className="mb-4">All cancellation requests must be submitted in writing via email to info@tripmeindia.com or through our website's contact form. The date of cancellation will be considered the date we receive your written request.</p>

      <h2 className="text-2xl font-semibold mb-4">2. Cancellation by Tripmeindia company</h2>
      <p className="mb-4">In rare circumstances, Tripmeindia company may be forced to cancel a tour or service due to unforeseen circumstances such as natural disasters, political instability, or insufficient bookings. In such cases, you will be offered a full refund or an alternative tour/service of equal value.</p>

      <h2 className="text-2xl font-semibold mb-4">3. Refunds</h2>
      <p className="mb-4">Refunds will be processed within [Number] business days of the cancellation approval. The refund will be issued to the original payment method used for the booking. Please note that bank processing times may vary.</p>

      <h2 className="text-2xl font-semibold mb-4">4. Amendments</h2>
      <p className="mb-4">Any amendments to bookings are subject to availability and may incur additional charges. Please contact us as soon as possible if you wish to amend your booking.</p>

      <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
      <p className="mb-4">If you have any questions about our Refund and Cancellation Policy, please contact us at: Tripmeindia company</p>
    </div>
  );
};

export default RefundCancellationPolicy;