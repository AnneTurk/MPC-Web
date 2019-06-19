function fetchData () {
fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json",{
        method: 'GET'
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              categories: result,
            }); 
            console.log(result);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log(error)
          }
        )
        return categories;
        }
export default fetchData;