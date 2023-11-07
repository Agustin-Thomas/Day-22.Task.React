function Card({details}){
 return<>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{details.planName}</h5>
            <h6 class="card-price text-center">${details.price}<span class="period">/month</span></h6>
            
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{details.user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{details.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>
              { details.features.map((feature)=>{
                return (
                    <li className={feature.enable ? "":"text-decoration-line-through"}>
                        {feature.name}
                    </li>
                );
              })}
              </li>
              
            </ul>
            <div class="d-grid">
              <button class="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
 </>
}
export default Card ;