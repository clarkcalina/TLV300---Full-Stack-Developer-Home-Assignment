interface SearchResultProps {
  data: any;
  type: string;
  error: string;
}

const SearchResult = ({ data, type, error }: SearchResultProps) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 ">
      <hr></hr>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {data && (
        <div className="mt-4 border p-4 leading-8 rounded bg-sky-50">
          {type === "domain" && (
            <div>
              <p className="flex justify-between">
                <strong>Domain Name:</strong> <span>{data.domainName}</span>
              </p>
              <p className="flex justify-between">
                <strong>Registrar Name:</strong>{" "}
                <span>{data.registrarName}</span>
              </p>
              <p className="flex justify-between">
                <strong>Registration Date:</strong>{" "}
                <span>{data.registrationDate}</span>
              </p>
              <p className="flex justify-between">
                <strong>Expiration Date:</strong>{" "}
                <span>{data.expirationDate}</span>
              </p>
              <p className="flex justify-between">
                <strong>Estimated Domain Age:</strong>{" "}
                <span>{data.estimatedDomainAge}</span>
              </p>
              <p className="flex justify-between">
                <strong>Hostnames:</strong> <span>{data.hostnames}</span>
              </p>
            </div>
          )}

          {type === "contact" && (
            <div>
              <p className="flex justify-between">
                <strong>Registrant Name:</strong>{" "}
                <span>{data.registrantName}</span>
              </p>
              <p className="flex justify-between">
                <strong>Technical Contact Name:</strong>{" "}
                <span>{data.technicalContactName}</span>
              </p>
              <p className="flex justify-between">
                <strong>Administrative Contact Name:</strong>{" "}
                <span>{data.administrativeContactName}</span>
              </p>
              <p className="flex justify-between">
                <strong>Contact Email:</strong> <span>{data.contactEmail}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
