const FormContainer = ({ children }) => {
    return (
      <div className="container mx-auto mt-8">
      
        <div className="flex justify-center">
      
          <div className="w-full max-w-md">
          
            <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormContainer;