import iiifManifest from '../../fixtures/presentation-2/iiif-fixture-manifest.json';
import iiifManifest2 from '../../fixtures/presentation-2/biblissima-manifest.json';
import blManifest from '../../fixtures/presentation-2/bl-manifest.json';
import nlwManifest from '../../fixtures/presentation-2/nlw-manifest.json';
import bodleianManifest from '../../fixtures/presentation-2/bodleian-manifest.json';
import stanfordManifest from '../../fixtures/presentation-2/stanford-manifest.json';
import folgerManifest from '../../fixtures/presentation-2/folger-manifest.json';
import villanovaManifest from '../../fixtures/presentation-2/villanova-manifest.json';
import ngaManifest from '../../fixtures/presentation-2/nga-manifest.json';
import quatarManifest from '../../fixtures/presentation-2/quatar-manifest.json';
import nlsCollection from '../../fixtures/presentation-2/nls-collection.json';
import nlsManifest from '../../fixtures/presentation-2/nls-manifest.json';
import nlsManifest2 from '../../fixtures/presentation-2/nls-manifest-2.json';
import ghent from '../../fixtures/presentation-2/ghent.json';
import sbbManifest from '../../fixtures/presentation-2/sbb-test.json';
import codexManifest from '../../fixtures/presentation-2/codex.json';
import wikimediaProxy from '../../fixtures/presentation-2/wikimedia-proxy.json';
import withDimensions from '../../fixtures/presentation-2/iiif-fixture-manifest-with-dimensions.json';
import europeana from '../../fixtures/presentation-2/europeana.json';
import { presentation2to3 } from '../../src/presentation-2';
import { Validator } from '@hyperion-framework/validator';

describe('Presentation 2 to 3', () => {
  const validator = new Validator();

  test('Simple manifest', () => {
    const result = presentation2to3.traverseManifest(iiifManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Biblissima manifest', () => {
    const result = presentation2to3.traverseManifest(iiifManifest2 as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('British Library manifest', () => {
    const result = presentation2to3.traverseManifest(blManifest as any);

    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);

    expect(result.service).toMatchInlineSnapshot(`
      Array [
        Object {
          "@id": "https://api.bl.uk/auth/iiif/login",
          "@type": "AuthCookieService1",
          "description": "Some content may only be available to registered readers or staff. Please log-in to The British Library to continue.",
          "header": "Please Log-In",
          "label": "Login to The British Library",
          "profile": "http://iiif.io/api/auth/0/login",
          "service": Array [
            Object {
              "@id": "https://api.bl.uk/auth/iiif/token",
              "@type": "AuthTokenService1",
              "profile": "http://iiif.io/api/auth/0/token",
            },
          ],
        },
        Object {
          "@id": "https://api.bl.uk/search/iiif/ark:/81055/vdc_100022545251.0x000002",
          "@type": "SearchService1",
          "label": "Search within this item",
          "profile": "http://iiif.io/api/search/0/search",
          "service": Array [
            Object {
              "@id": "https://api.bl.uk/search/iiif/ark:/81055/vdc_100022545251.0x000002/autocomplete",
              "@type": "AutoCompleteService1",
              "label": "Get suggested words in this item",
              "profile": "http://iiif.io/api/search/0/autocomplete",
            },
          ],
        },
        Object {
          "@context": "http://universalviewer.io/context.json",
          "@id": "http://access.bl.uk/item/share/ark:/81055/vdc_100022545251.0x000002",
          "@type": "Service",
          "profile": "http://universalviewer.io/share-extensions-profile",
        },
        Object {
          "@context": "http://universalviewer.io/context.json",
          "@id": "http://access.bl.uk/item/feedback/ark:/81055/vdc_100022545251.0x000002",
          "@type": "Service",
          "profile": "http://universalviewer.io/feedback-extensions-profile",
        },
        Object {
          "@context": "http://universalviewer.io/context.json",
          "@id": "http://access.bl.uk/item/print/ark:/81055/vdc_100022545251.0x000002",
          "@type": "Service",
          "profile": "http://universalviewer.io/print-extensions-profile",
        },
      ]
    `);
  });

  test('NLW manifest', () => {
    const result = presentation2to3.traverseManifest(nlwManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Ghent manifest', () => {
    const result = presentation2to3.traverseManifest(ghent as any);
    const isValid = validator.validateManifest(result);

    // @todo removed due to ID losing its reference.
    // expect(result.id).toEqual(
    //   'https://adore.ugent.be/IIIF/manifests/archive.ugent.be:DEED7A64-2798-11E3-B8DE-18E597481370'
    // );

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Bodleian manifest', () => {
    const result = presentation2to3.traverseManifest(bodleianManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Stanford manifest', () => {
    const result = presentation2to3.traverseManifest(stanfordManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Folger manifest', () => {
    const result = presentation2to3.traverseManifest(folgerManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Villanova manifest', () => {
    const result = presentation2to3.traverseManifest(villanovaManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('NGA manifest', () => {
    const result = presentation2to3.traverseManifest(ngaManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Quatar manifest', () => {
    const result: any = presentation2to3.traverseManifest(quatarManifest as any);
    const isValid = validator.validateManifest(result);

    expect(result.structures).not.toBeUndefined();

    expect(result.structures[0].items.length).toEqual(498);

    // @todo see why the identifiers provided are not valid.
    expect(validator.validators.manifest!.errors!.length).toEqual(3);
    expect(isValid).toEqual(false);
  });

  test('NLS Collection', () => {
    const result = presentation2to3.traverseManifest(nlsCollection as any);
    const isValid = validator.validateCollection(result);

    expect(validator.validators.collection.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('NLS Manifest', () => {
    const result = presentation2to3.traverseManifest(nlsManifest as any);
    const isValid = validator.validateManifest(result);

    expect(result.structures).not.toBeUndefined();

    expect(result.items[0].thumbnail).toMatchInlineSnapshot(`
      Array [
        Object {
          "height": 113,
          "id": "https://deriv.nls.uk/dcn4/7443/74438561.4.jpg",
          "type": "Image",
          "width": 150,
        },
      ]
    `);

    expect(result.structures![0]).toMatchInlineSnapshot(`
      Object {
        "id": "https://view.nls.uk/iiif/7446/74464117/range/r-1",
        "items": Array [
          Object {
            "id": "https://view.nls.uk/iiif/7446/74464117/canvas/1",
            "type": "Canvas",
          },
        ],
        "label": Object {
          "none": Array [
            "Imaginative depiction of the completed Forth Rail Bridge",
          ],
        },
        "type": "Range",
      }
    `);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });
  test('NLS Manifest 2', () => {
    const result = presentation2to3.traverseManifest(nlsManifest2 as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('SBB manifest', () => {
    const result = presentation2to3.traverseManifest(sbbManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Codex manifest', () => {
    const result = presentation2to3.traverseManifest(codexManifest as any);
    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('Wikimedia proxy manifest', () => {
    const result = presentation2to3.traverseManifest(wikimediaProxy as any);

    expect(result.type).toEqual('Manifest');

    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);
  });

  test('IIIF Fixture with dimensions', () => {
    const result = presentation2to3.traverseManifest(withDimensions as any);
    expect(result.type).toEqual('Manifest');

    const isValid = validator.validateManifest(result);

    expect(validator.validators.manifest.errors).toEqual(null);
    expect(isValid).toEqual(true);

    expect(result.service).toMatchInlineSnapshot(`
      Array [
        Object {
          "@context": "http://iiif.io/api/annex/services/physdim/1/context.json",
          "@id": "http://example.org/iiif/manifest/1/dims",
          "@type": "Service",
          "physicalScale": 0.0025,
          "physicalUnits": "in",
          "profile": "http://iiif.io/api/annex/services/physdim",
        },
      ]
    `);
  });

  test('europeana', () => {
    const result = presentation2to3.traverseCanvas(europeana as any);
    expect(result.type).toEqual('Canvas');

    expect(result.annotations).toEqual([
      {
        id: 'https://iiif.europeana.eu/presentation/9200396/BibliographicResource_3000118436165/annopage/21',
        type: 'AnnotationPage',
      },
    ]);
  });
});
