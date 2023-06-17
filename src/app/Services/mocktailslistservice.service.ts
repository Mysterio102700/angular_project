import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mocktailslist } from '../Models/mocktailslist';

@Injectable({
  providedIn: 'root'
})
export class MocktailslistserviceService {
  BaseUrl='assets/Data/Mocktails.json'

  constructor(private http:HttpClient) { }
  ngOnInit():void{}

  getMocktailslistId(id:Number):Mocktailslist{
    return this.getMocktailslistall().find(Mocktails=>Mocktails.id=id)!;
  }

  getMocktailslistall():Mocktailslist[]{
      return [
        {
          "id": 1,
          "name": "Virgin Mojito",
          "description": "Refreshing blend of lime, mint, and soda",
          "ingredients": ["lime juice", "mint leaves", "soda water", "sugar", "ice"],
          "price": 50.0,
          "availability": true,
          "image": "https://example.com/virgin-mojito.jpg"
        },
        {
          "id": 2,
          "name": "Strawberry Daiquiri",
          "description": "Sweet and fruity strawberry mocktail",
          "ingredients": ["strawberries", "lime juice", "simple syrup", "ice"],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/strawberry-daiquiri.jpg"
        },
        {
          "id": 3,
          "name": "Pina Colada",
          "description": "Tropical blend of pineapple and coconut",
          "ingredients": ["pineapple juice", "coconut milk", "simple syrup", "ice"],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/pina-colada.jpg"
        },
        {
          "id": 4,
          "name": "Watermelon Cooler",
          "description": "Refreshing mocktail with watermelon and mint",
          "ingredients": [
            "watermelon juice",
            "lime juice",
            "mint leaves",
            "simple syrup",
            "soda water",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/watermelon-cooler.jpg"
        },
        {
          "id": 5,
          "name": "Mango Tango",
          "description": "Sweet and tangy mango mocktail",
          "ingredients": [
            "mango juice",
            "lime juice",
            "simple syrup",
            "soda water",
            "ice"
          ],
          "price": 50.0,
          "availability": true,
          "image": "https://example.com/mango-tango.jpg"
        },
        {
          "id": 6,
          "name": "Blue Lagoon",
          "description": "Refreshing blue mocktail with citrus flavors",
          "ingredients": ["lemonade", "blue curacao syrup", "lemon slices", "ice"],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/blue-lagoon.jpg"
        },
        {
          "id": 7,
          "name": "Sunset Paradise",
          "description": "Tropical blend of orange and pineapple",
          "ingredients": [
            "orange juice",
            "pineapple juice",
            "grenadine syrup",
            "orange slices",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/sunset-paradise.jpg"
        },
        {
          "id": 8,
          "name": "Cranberry Sparkler",
          "description": "Bubbly mocktail with cranberry and lime",
          "ingredients": [
            "cranberry juice",
            "lime juice",
            "soda water",
            "lime slices",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/cranberry-sparkler.jpg"
        },
        {
          "id": 9,
          "name": "Tropical Punch",
          "description": "Fruity and vibrant tropical mocktail",
          "ingredients": [
            "pineapple juice",
            "orange juice",
            "cranberry juice",
            "grenadine syrup",
            "pineapple slices",
            "orange slices",
            "ice"
          ],
          "price": 65.0,
          "availability": true,
          "image": "https://example.com/tropical-punch.jpg"
        },
        {
          "id": 10,
          "name": "Ginger Fizz",
          "description": "Zesty mocktail with ginger and lime",
          "ingredients": [
            "ginger ale",
            "lime juice",
            "simple syrup",
            "ginger slices",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/ginger-fizz.jpg"
        },
        {
          "id": 11,
          "name": "Kiwi Spritzer",
          "description": "Refreshing kiwi mocktail with a hint of lime",
          "ingredients": [
            "kiwi juice",
            "lime juice",
            "soda water",
            "kiwi slices",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/kiwi-spritzer.jpg"
        },
        {
          "id": 12,
          "name": "Minty Lemonade",
          "description": "Cooling blend of lemon and mint",
          "ingredients": ["lemon juice", "mint leaves", "soda water", "sugar", "ice"],
          "price": 50.0,
          "availability": true,
          "image": "https://example.com/minty-lemonade.jpg"
        },
        {
          "id": 13,
          "name": "Raspberry Fizz",
          "description": "Bubbly mocktail with raspberry and lime",
          "ingredients": [
            "raspberry syrup",
            "lime juice",
            "soda water",
            "raspberries",
            "lime slices",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/raspberry-fizz.jpg"
        },
        {
          "id": 14,
          "name": "Coconut Cooler",
          "description": "Creamy and refreshing coconut mocktail",
          "ingredients": [
            "coconut water",
            "pineapple juice",
            "lime juice",
            "simple syrup",
            "coconut flakes",
            "pineapple slices",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 65.0,
          "availability": true,
          "image": "https://example.com/coconut-cooler.jpg"
        },
        {
          "id": 15,
          "name": "Mango Sunrise",
          "description": "Tropical blend of mango and orange",
          "ingredients": [
            "mango juice",
            "orange juice",
            "grenadine syrup",
            "orange slices",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/mango-sunrise.jpg"
        },
        {
          "id": 16,
          "name": "Cucumber Cooler",
          "description": "Refreshing mocktail with cucumber and mint",
          "ingredients": [
            "cucumber juice",
            "lime juice",
            "mint leaves",
            "soda water",
            "cucumber slices",
            "lime slices",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/cucumber-cooler.jpg"
        },
        {
          "id": 17,
          "name": "Berry Blast",
          "description": "Mixed berry mocktail with a burst of flavors",
          "ingredients": [
            "mixed berry juice",
            "lime juice",
            "simple syrup",
            "soda water",
            "berries",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/berry-blast.jpg"
        },
        {
          "id": 18,
          "name": "Passion Fruit Punch",
          "description": "Exotic and fruity passion fruit mocktail",
          "ingredients": [
            "passion fruit juice",
            "orange juice",
            "lime juice",
            "simple syrup",
            "soda water",
            "orange slices",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 65.0,
          "availability": true,
          "image": "https://example.com/passion-fruit-punch.jpg"
        },
        {
          "id": 19,
          "name": "Lemon-Berry Splash",
          "description": "Refreshing blend of lemon and mixed berries",
          "ingredients": [
            "lemonade",
            "mixed berry juice",
            "soda water",
            "berries",
            "lemon slices",
            "mint leaves",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/lemon-berry-splash.jpg"
        },
        {
          "id": 20,
          "name": "Peach Bellini",
          "description": "Sparkling peach mocktail with a touch of sweetness",
          "ingredients": [
            "peach juice",
            "sparkling water",
            "simple syrup",
            "peach slices",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/peach-bellini.jpg"
        },
        {
          "id": 21,
          "name": "Grapefruit Spritzer",
          "description": "Bubbly mocktail with grapefruit and lime",
          "ingredients": [
            "grapefruit juice",
            "lime juice",
            "soda water",
            "grapefruit slices",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/grapefruit-spritzer.jpg"
        },
        {
          "id": 22,
          "name": "Apple Pie Mocktail",
          "description": "Warm and comforting mocktail with apple and cinnamon",
          "ingredients": [
            "apple juice",
            "cinnamon syrup",
            "sparkling water",
            "apple slices",
            "cinnamon sticks",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/apple-pie-mocktail.jpg"
        },
        {
          "id": 23,
          "name": "Citrus Punch",
          "description": "Citrusy mocktail with a medley of orange and lemon",
          "ingredients": [
            "orange juice",
            "lemon juice",
            "simple syrup",
            "soda water",
            "orange slices",
            "lemon slices",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/citrus-punch.jpg"
        },
        {
          "id": 24,
          "name": "Cherry Limeade",
          "description": "Tart and sweet cherry mocktail with lime",
          "ingredients": [
            "cherry juice",
            "lime juice",
            "simple syrup",
            "soda water",
            "cherries",
            "lime slices",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/cherry-limeade.jpg"
        },
        {
          "id": 25,
          "name": "Tropical Breeze",
          "description": "Tropical mocktail with a mix of fruits and coconut",
          "ingredients": [
            "pineapple juice",
            "orange juice",
            "coconut water",
            "grenadine syrup",
            "pineapple slices",
            "orange slices",
            "mint leaves",
            "ice"
          ],
          "price": 65.0,
          "availability": true,
          "image": "https://example.com/tropical-breeze.jpg"
        },
        {
          "id": 26,
          "name": "Blueberry Lemonade",
          "description": "Sweet and tangy blueberry mocktail with lemon",
          "ingredients": [
            "blueberry syrup",
            "lemonade",
            "soda water",
            "blueberries",
            "lemon slices",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/blueberry-lemonade.jpg"
        },
        {
          "id": 27,
          "name": "Mint Lime Splash",
          "description": "Refreshing blend of mint and lime",
          "ingredients": ["lime juice", "mint leaves", "soda water", "sugar", "ice"],
          "price": 50.0,
          "availability": true,
          "image": "https://example.com/mint-lime-splash.jpg"
        },
        {
          "id": 28,
          "name": "Melon Cooler",
          "description": "Cooling mocktail with a variety of melons",
          "ingredients": [
            "watermelon juice",
            "cantaloupe juice",
            "honeydew juice",
            "lime juice",
            "soda water",
            "melon balls",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 65.0,
          "availability": true,
          "image": "https://example.com/melon-cooler.jpg"
        },
        {
          "id": 29,
          "name": "Sparkling Grape",
          "description": "Bubbly mocktail with grape juice and soda",
          "ingredients": [
            "grape juice",
            "soda water",
            "grapes",
            "mint leaves",
            "ice"
          ],
          "price": 55.0,
          "availability": true,
          "image": "https://example.com/sparkling-grape.jpg"
        },
        {
          "id": 30,
          "name": "Pomegranate Splash",
          "description": "Refreshing mocktail with the tanginess of pomegranate",
          "ingredients": [
            "pomegranate juice",
            "lime juice",
            "simple syrup",
            "soda water",
            "pomegranate seeds",
            "lime slices",
            "mint leaves",
            "ice"
          ],
          "price": 60.0,
          "availability": true,
          "image": "https://example.com/pomegranate-splash.jpg"
        }
      ]
      
  }
}
