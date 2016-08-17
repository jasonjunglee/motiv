export function displaySupplement(userId) {
  return (dispatch) => {
    return fetch('/api/supplements', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then((response) => {
        if (response.ok) {
          return response.json().then((json) => {
            dispatch({
              type: 'DISPLAY_SUPPLEMENT_SUCCESS',
              payload: Array.isArray(json) ? json : [json]
            });
          });
        } else {
          return response.json().then((json) => {
            dispatch({
              type: 'DISPLAY_SUPPLEMENT_FAIL',
              error: json
            })
          });
        }
      })
    }
  }

  export function postSupplement(supplement,amount){
    return (dispatch) => {
      console.log(supplement,'this is actual info being passed down')
      return fetch('/api/supplements/', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({supplement,amount}),
        credentials: 'same-origin'
      }).then((response) => {
        if (response.ok) {
          console.log('it works')
        }
      })
    }
  }

  export function putSupplement(supplement,amount,id){
    return (dispatch) => {
      console.log('we are calling put')
      return fetch('/api/supplements/', {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({supplement,amount,id}),
        credentials: 'same-origin'
      }).then((response) => {
        if (response.ok) {
          console.log('it works')
        }
      })
    }
  }


  export function deleteSupplement(id){
    return (dispatch) => {
      return fetch('/api/supplements/',{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id:id}),
        credentials: 'same-origin'

      }).then((response) => {
        if (response.ok) {
          console.log(id,'id we be deleting')
        }else{
          return function(err){
            console.log(err,'we error')
          }
        }
      })
    }
  }
