export default function FilterPriceForm({ handleFilterPrice }) {
    return (
        <div>
            <h2>Filter Price</h2>
            <form>
                <input type="radio" name="all" id="all" value="all" onChange={handleFilterPrice} />
                <label htmlFor="all">Show All Prices</label>
                <br />
                <input type="radio" name="filterPrice" id="20000" value={19999} onChange={handleFilterPrice} />
                <label htmlFor="20000">{"< $20,000"}</label>
                <br />
                <input type="radio" name="filterPrice" id="25000" value={24999} onChange={handleFilterPrice} />
                <label htmlFor="25000">{"< $25,000"}</label>
                <br />
                <input type="radio" name="filterPrice" id="30000" value={29999} onChange={handleFilterPrice} />
                <label htmlFor="30000">{"< $30,000"}</label>
                <br />
                <input type="radio" name="filterPrice" id="35000" value={34999} onChange={handleFilterPrice} />
                <label htmlFor="35000">{"< $35,000"}</label>
                <br />
            </form>
        </div>
    );
}
