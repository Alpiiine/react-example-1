import '../semantic/dist/semantic.css';
import { Tabular } from '@ui/tabular';
import { Header } from '@ui/header';
import './app.scss';
import { Cocktail, CocktailList } from '@features/cocktail';
import React, { useMemo } from 'react';
import { BarChart, PieChart } from '@ui/chart';
import { useGetCocktailsQuery } from '@features/api';
import { TabProps } from '@ui/tabular';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchInitialLetter, setSearchInitialLetter] = React.useState('a');
  const { data, error, isLoading } = useGetCocktailsQuery(searchInitialLetter);

  const generateTabs = useMemo(() => {
    const ALPHABET_LENGTH = 26;
    const ASCII_CODE_A = 65;
    const tabTitles = [];
    for (let i = 0; i < ALPHABET_LENGTH; i++) {
      tabTitles.push({
        id: i,
        title: String.fromCharCode(ASCII_CODE_A + i),
        active: i === activeTab,
      });
    }
    return tabTitles;
  }, [activeTab]);

  const handleTabClick = (tab: TabProps) => {
    setActiveTab(tab.id);
    setSearchInitialLetter(tab.title.toLowerCase());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const MIN_SEARCH_LENGTH = 3;
    if (value.length >= MIN_SEARCH_LENGTH) {
      setSearchValue(event.target.value);
    } else if (value.length === 0) {
      setSearchValue('');
    }
  };

  const renderCocktailList = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Oh no, there was an error</div>;
    } else if (!data || !data.drinks) {
      return <div>No data</div>;
    }

    let filteredCocktails = data.drinks.filter((cocktail: Cocktail) => {
      return cocktail.strDrink
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    if (filteredCocktails.length === 0) {
      return <div>No results found</div>;
    }

    //limit the length of instructions to 150 characters, add ellipsis if longer
    filteredCocktails = filteredCocktails.map((cocktail: Cocktail) => {
      return {
        ...cocktail,
        strInstructions:
          cocktail.strInstructions.length > 150
            ? cocktail.strInstructions.substring(0, 150) + '...'
            : cocktail.strInstructions,
      };
    });

    return <CocktailList cocktails={filteredCocktails} />;
  };

  const renderBarChart = () => {
    if (!data || !data.drinks) {
      return <div>No data</div>;
    }

    if (data.drinks.length === 0) {
      return <div>No results found</div>;
    }

    //calculate the number of alcoholic and non-alcoholic cocktails
    const alcoholicCocktails = data.drinks.filter((cocktail: Cocktail) => {
      return cocktail.strAlcoholic === 'Alcoholic';
    });

    const nonAlcoholicCocktails = data.drinks.filter((cocktail: Cocktail) => {
      return cocktail.strAlcoholic === 'Non alcoholic';
    });

    const chartData = [
      { x: 'Alcoholic', y: alcoholicCocktails.length },
      { x: 'Non Alcoholic', y: nonAlcoholicCocktails.length },
    ];

    return <BarChart data={chartData} />;
  };

  const renderPieChart = () => {
    if (!data || !data.drinks) {
      return <div>No data</div>;
    }

    if (data.drinks.length === 0) {
      return <div>No results found</div>;
    }

    //calculate the number of different types of glass used
    const glassTypes: string[] = data.drinks.map((cocktail: Cocktail) => {
      return cocktail.strGlass;
    });

    const uniqueGlassTypes = [...new Set(glassTypes)];

    const pieChartData = uniqueGlassTypes.map((glassType: string) => {
      return {
        x: glassType,
        y: glassTypes.filter((glass: string) => glass === glassType).length,
      };
    });

    const PIE_CHART_COLOR_SCHEME = [
      '#ea5545',
      '#f46a9b',
      '#ef9b20',
      '#edbf33',
      '#ede15b',
      '#bdcf32',
      '#87bc45',
      '#27aeef',
      '#b33dc6',
    ];

    return <PieChart data={pieChartData} colorScale={PIE_CHART_COLOR_SCHEME} />;
  };

  return (
    <div className="app ui fluid container">
      <Header paths={['Home', 'Cocktails List']} className="app-header" />
      <Tabular
        searchPlaceholder={'What are you looking for?'}
        tabTitles={generateTabs}
        onInputChange={handleInputChange}
        onTabClick={handleTabClick}
      >
        {renderCocktailList()}
      </Tabular>
      <div className={'ui container bottom attached chart-container'}>
        <div className={'chart'}>{renderPieChart()}</div>
        <div className={'chart'}>{renderBarChart()}</div>
      </div>
    </div>
  );
}

export default App;
