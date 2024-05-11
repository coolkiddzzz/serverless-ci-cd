module.exports.firsthandler = async (event) => {
    console.log('Start')
    console.log(event)
    console.log('End')
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is get function!",
        },null,2),
    };
  };
  
  
  module.exports.handler_hello = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Hello there!",
          input: event,
        },
        null,
        2
      ),
    };
  };
  